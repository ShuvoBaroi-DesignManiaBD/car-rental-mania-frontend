
const CustomContainer = ({className, children}:any) => {
    
    return (
        <section className={`max-w-screen-xl min-h-[50vh] py-12 md:py-20 mx-auto ${className}`}>
            {children}
        </section>
    );
};

export default CustomContainer;