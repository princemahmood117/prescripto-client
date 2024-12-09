

const Gallary = () => {
  return (
    <div>
        <div>
            <h2 className="text-4xl text-center font-semibold">Our Gallary</h2>
        </div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.im.ge/2024/12/08/z5tR08.gallary1.jpeg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://i.im.ge/2024/12/08/z5tWgh.gallary2.jpeg"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://i.im.ge/2024/12/08/z5tVDY.gallary3.jpeg"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://i.im.ge/2024/12/08/z5tfED.gallary4.jpeg"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://i.im.ge/2024/12/08/z5tkv4.gallary5.jpeg"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          {/* <img
            src="https://source.unsplash.com/random/200x200/?4"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://source.unsplash.com/random/200x200/?5"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://source.unsplash.com/random/200x200/?6"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://source.unsplash.com/random/200x200/?7"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <img
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Gallary;
