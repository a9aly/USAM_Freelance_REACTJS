const Category = (data) => {
  return (
    <div className="wrapper bg-pri-color h-fit">
      <h1>
        <span className=" text-button-color">Browse </span>Talent By Category
      </h1>
      <div className="talent-container pb-[150px]">
        {data.talent_category.map((talent) => (
          <div className="talent-card" key={talent.name}>
            <img src="gitlab.png" />
            <h1>
              {talent.name}
              <br />
              <div className=" font-extralight text-sm flex justify-between flex-grow">
                <div>
                  <img src="greenstar.png" alt="rating-star" className="!w-4" />
                  <span> &nbsp; 4.85/5 </span>
                  <span>349 skills</span>
                </div>
              </div>
            </h1>
          </div>
        ))}
        <div className="flex flex-row align-center justify-center w-[300%]">
          <div className=" border text-center  w-fit h-fit bg-button-color text-white p-5">
            More Categories
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
