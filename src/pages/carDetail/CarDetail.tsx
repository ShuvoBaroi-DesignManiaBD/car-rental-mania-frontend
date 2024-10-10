const CarDetail = () => {
  return (
    <>
    <section className="max-w-screen-xl mx-auto py-20 md:py-30 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">Car Details</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <img src="https://i.ibb.co/5xk5VH6/Car-Insurance.png" alt="car" className="w-10 h-10" />
                <span className="text-lg font-semibold">Car Name</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="https://i.ibb.co/5xk5VH6/Car-Insurance.png" alt="car" className="w-10 h-10" />
                <span className="text-lg font-semibold">Car Model</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <img src="https://i.ibb.co/5xk5VH6/Car-Insurance.png" alt="car" className="w-10 h-10" />
                <span className="text-lg font-semibold">Car Price</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="https://i.ibb.co/5xk5VH6/Car-Insurance.png" alt="car" className="w-10 h-10" />
                <span className="text-lg font-semibold">Car Color</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/5xk5VH6/Car-Insurance.png" alt="car" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
    <div>
      CarDetail
    </div>
    
    <div>
      CarDetail
    </div> 
    </>)
};

export default CarDetail;