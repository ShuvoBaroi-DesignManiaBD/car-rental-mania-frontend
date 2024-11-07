import { DatePicker, Select, Button, Checkbox } from 'antd';
import 'antd/dist/reset.css';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import RoutingControl from './RoutingControl'; // Import RoutingControl
import DesignToken from '@/lib/providers/antDesign/DesignToken';

const { RangePicker } = DatePicker;
const { Option } = Select;

const locations = [
  'Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys', 'Riga', 'Daugavpils', 'Liepaja',
  'Jelgava', 'Jurmala', 'Ventspils', 'Rezekne', 'Valmiera', 'Ogre', 'Jekabpils', 'Sigulda', 'Cesis',
  'Gulbene', 'Madona', 'Limbazi', 'Aizkraukle', 'Preili', 'Balvi', 'Kraslava', 'Talsi', 'Dobele',
  'Kuldiga', 'Kandava', 'Tukums', 'Adazi', 'Baltezers', 'Tallinn', 'Tartu', 'Parnu', 'Narva',
  'Viljandi', 'Rakvere', 'Kuressaare', 'Sindi', 'Valda'
];

// Updated city coordinates to include all locations in the list
const cityCoordinates: { [key: string]: [number, number] } = {
  'Vilnius': [54.6872, 25.2797],
  'Kaunas': [54.8985, 23.9036],
  'Klaipeda': [55.7033, 21.1443],
  'Siauliai': [55.9333, 23.3167],
  'Panevezys': [55.7333, 24.35],
  'Riga': [56.946, 24.105],
  'Daugavpils': [55.8714, 26.5161],
  'Liepaja': [56.5057, 21.0108],
  'Jelgava': [56.6528, 23.7186],
  'Jurmala': [56.9665, 23.7502],
  'Ventspils': [57.3898, 21.5701],
  'Rezekne': [56.5072, 27.3305],
  'Valmiera': [57.5412, 25.427],
  'Ogre': [56.8166, 24.6149],
  'Jekabpils': [56.4993, 25.861],
  'Sigulda': [57.151, 24.8645],
  'Cesis': [57.3119, 25.2713],
  'Gulbene': [57.1807, 26.7565],
  'Madona': [56.8526, 26.2166],
  'Limbazi': [57.5122, 24.7193],
  'Aizkraukle': [56.5976, 25.2571],
  'Preili': [56.2946, 26.7224],
  'Balvi': [57.1347, 27.265],
  'Kraslava': [55.8955, 27.1677],
  'Talsi': [57.2415, 22.5923],
  'Dobele': [56.6257, 23.2783],
  'Kuldiga': [56.968, 21.9778],
  'Kandava': [57.041, 22.7702],
  'Tukums': [56.9667, 23.1667],
  'Adazi': [57.0905, 24.3293],
  'Baltezers': [57.037, 24.3559],
  'Tallinn': [59.437, 24.7535],
  'Tartu': [58.378, 26.7288],
  'Parnu': [58.3859, 24.4971],
  'Narva': [59.3799, 28.2002],
  'Viljandi': [58.3639, 25.595],
  'Rakvere': [59.3461, 26.3554],
  'Kuressaare': [58.2526, 22.485],
  'Sindi': [58.3961, 24.6657],
  'Valda': [56.5517, 23.9686],
};

const defaultCoords = { lat: 56.946, lng: 24.105 }; // Default to Riga coordinates

const SearchForm = () => {
  const [formValues, setFormValues] = useState({
    carType: '',
    features: [],
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: null,
    dropoffDate: null,
  });

  const [pickupCoords, setPickupCoords] = useState(defaultCoords);
  const [dropoffCoords, setDropoffCoords] = useState(defaultCoords);

  const handleSearch = () => {
    console.log(formValues);
  };

  const updateMapLocation = (type: 'pickup' | 'dropoff', location: string) => {
    const newCoords = cityCoordinates[location] || [56.946, 24.105]; // Default to Riga if location not found

    if (type === 'pickup') {
      setPickupCoords({ lat: newCoords[0], lng: newCoords[1] });
    } else if (type === 'dropoff') {
      setDropoffCoords({ lat: newCoords[0], lng: newCoords[1] });
    }
  };

  return (
    <div className="flex gap-8">
      <div className="p-6 rounded-md shadow-md w-full md:w-3/5" style={{backgroundColor: DesignToken().colorBgContainer, color: DesignToken().colorText}}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Pickup Location */}
          <Select
            className="w-full"
            placeholder="Select Pickup Location"
            onChange={(value) => {
              setFormValues({ ...formValues, pickupLocation: value });
              updateMapLocation('pickup', value);
            }}
            style={{color: DesignToken().colorText}}
          >
            {locations.map((location) => (
              <Option key={location} value={location}>
                {location}
              </Option>
            ))}
          </Select>

          {/* Dropoff Location */}
          <Select
            className="w-full"
            placeholder="Select Dropoff Location"
            onChange={(value) => {
              setFormValues({ ...formValues, dropoffLocation: value });
              updateMapLocation('dropoff', value);
            }}
          >
            {locations.map((location) => (
              <Option key={location} value={location}>
                {location}
              </Option>
            ))}
          </Select>

          {/* Pickup & Dropoff Dates */}
          <RangePicker
            className="w-full"
            onChange={(dates) => {
              if (dates) {
                setFormValues({
                  ...formValues,
                  pickupDate: dates[0].toDate(),
                  dropoffDate: dates[1].toDate(),
                });
              }
            }}
          />

          {/* Car Type */}
          <Select
            className="w-full"
            placeholder="Select Car Type"
            onChange={(value) => setFormValues({ ...formValues, carType: value })}
          >
            <Option value="SUV">SUV</Option>
            <Option value="Sedan">Sedan</Option>
            <Option value="Luxury">Luxury</Option>
          </Select>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            <Checkbox
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  features: e.target.checked
                    ? [...formValues.features, e.target.value]
                    : formValues.features.filter((f) => f !== e.target.value),
                })
              }
              value="GPS"
            >
              GPS
            </Checkbox>
            <Checkbox
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  features: e.target.checked
                    ? [...formValues.features, e.target.value]
                    : formValues.features.filter((f) => f !== e.target.value),
                })
              }
              value="Air Conditioning"
            >
              Air Conditioning
            </Checkbox>
          </div>
        </div>

        {/* Search Button */}
        <Button type="primary" onClick={handleSearch} className="mt-4 w-full">
          Apply
        </Button>
      </div>

      {/* Map */}
      <div className="w-full md:w-2/5 shadow-md">
        <MapContainer className="rounded-md" center={[pickupCoords.lat, pickupCoords.lng]} zoom={7} style={{ height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={pickupCoords} />
          <Marker position={dropoffCoords} />

          {/* Routing Control Component */}
          <RoutingControl pickupCoords={pickupCoords} dropoffCoords={dropoffCoords} />
        </MapContainer>
      </div>
    </div>
  );
};

export default SearchForm;
