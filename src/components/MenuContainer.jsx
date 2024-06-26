import RowContainer from "./RowContainer";


const MenuContainer = () => {

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Los mas vendidos
        </p>
        ### Category Filters
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
        </div>
        ### Filtered Food Items
        <div className="w-full">
          <RowContainer
            flag={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;