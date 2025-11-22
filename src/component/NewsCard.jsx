import { CiShare2 } from "react-icons/ci";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {



  return (
    <div className="card bg-base-100 shadow-xl  rounded-xl">
      {/* Author Info */}
      <div className="flex items-center gap-3 p-4">
        <img
          src={news.author.img}
          className="w-10 h-10 rounded-full"
          alt="author"
        />
        <div className="flex  ">
             <div>
          <h3 className="font-semibold">{news.author.name}</h3>
          <p className="text-sm text-gray-500">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
      <button>
         <FaRegBookmark /> 
       <CiShare2 />
      </button>

        </div>


      </div>




      {/* Title */}
      <h2 className="px-4 text-lg font-bold">{news.title}</h2>

      {/* Thumbnail */}
      <figure>
        <img
          src={news.thumbnail_url}
          alt="thumbnail"
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-600">
          {news.details.substring(0, 180)}...
        </p>

        {/* Read More */}
        <button className="btn btn-link p-0 text-blue-600">Read More</button>

        {/* Rating & Views */}
        <div className="flex justify-between items-center pt-2 border-t">
          <div className="flex items-center gap-1 text-orange-500">
            <FaStar />
            <span className="font-semibold">{news.rating.number}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
