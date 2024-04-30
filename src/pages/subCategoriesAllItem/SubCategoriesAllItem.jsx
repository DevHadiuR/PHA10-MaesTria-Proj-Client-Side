import { useLoaderData } from "react-router-dom";

const SubCategoriesAllItem = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return (
    <div className="mt-14">
      <h1 className="text-4xl md:text-6xl text-center font-dm">
        Explore Detailed Collections
      </h1>
      <p className="text-xl w-full md:w-[70%] mx-auto text-center mt-5 font-serif">
        Dive into the immersive world of Sculpture Specialties, where every
        collection offers a captivating journey through the depths of artistic
        expression. Delve into meticulously curated selections, each
        representing the pinnacle of craftsmanship within your chosen category.
        Uncover the stories, intricacies, and boundless creativity encapsulated
        within these remarkable works of art.
      </p>


<div className="mt-16">

{
    loaderData.map(item=>
    
    
    )
}

</div>

    </div>
  );
};

export default SubCategoriesAllItem;
