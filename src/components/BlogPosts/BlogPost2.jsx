import { Link } from "react-router-dom";
import PatternImg2 from "../../assets/images/patternImg2.jpg";
import PatternImg from "../../assets/images/patternImg3.jpg";
import { posts2 } from "../../data/posts2";
import { SectionTitle } from "../SectionTitles";

const BlogPost2 = (props) => {
  return (
    <section className="postsWrap py-[5rem] sm:py-[6rem] md:py-[7.5rem] relative w-full">
      <div
        className="fixedBg bg-left-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${PatternImg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
        <SectionTitle
          title="Featured"
          titleInner="Posts"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        ></SectionTitle>
        <div className="postsList grid gap-[1.875rem] lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative w-full">
          {posts2.map(
            (item, index) =>
              index < 2 && (
                <div className="postBox group relative w-full" key={index}>
                  <div className="postImg overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] w-full">
                    <Link to={`/blog/${item.id}`} title={item.postTitle}>
                      <img
                        className="w-full group-hover:scale-105"
                        src={item.postImg}
                        alt={item.postTitle}
                      ></img>
                    </Link>
                  </div>
                  <div className="postInfo relative z-[1] pl-12 pr-5 md:px-10 py-5 sm:py-7 md:py-8 mt-[-4.6875rem] ml-16 sm:ml-[1.5625rem] md:left-1/2 md:-translate-x-1/2 max-w-[80%] lg:max-w-[23.75rem] md:pl-[4.6875rem]">
                    <div
                      className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                      style={{ backgroundImage: `url(${PatternImg2})` }}
                    ></div>
                    <span className="bg-accent rounded-[10px] w-[5.25rem] absolute text-center text-white text-[1.375rem] font-Poppins font-semibold p-1 top-[3.4375rem] left-[-3.125rem]">
                      <i className="text-accent2 uppercase text-[13px] font-Poppins font-bold block not-italic leading-none bg-white py-[7px] mb-1 rounded-t-[8px] rounded-b-[3px]">
                        {item.postMonth}
                      </i>
                      {item.postDate}
                    </span>
                    <span className="flex items-center text-accent gap-1 text-[1rem] font-NunitoSans font-bold">
                      By
                      <Link
                        className="hover:text-accent2"
                        to={item.postAuthorLink}
                        title={item.postAuthor}
                      >
                        {item.postAuthor}
                      </Link>
                    </span>
                    <h3 className="text-accent2 text-[1.25rem] font-Poppins font-semibold mt-2">
                      <Link
                        className="hover:text-accent"
                        to={`/blog/${item.id}`}
                        title={item.postTitle}
                      >
                        {item.postTitle}
                      </Link>
                    </h3>
                    <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
                    <span className="flex items-center text-accent gap-1 text-[.9375] font-NunitoSans font-semibold">
                      {item.cateList.map(
                        (cateitem, index2) =>
                          index2 < 3 && (
                            <Link
                              key={index2}
                              className="hover:text-accent2"
                              to={cateitem.cateLink}
                              title={cateitem.cateItem}
                            >
                              {cateitem.cateItem}
                            </Link>
                          )
                      )}
                    </span>
                  </div>
                  {/* Post Box */}
                </div>
              )
          )}
          {/* Posts List */}
        </div>
        <div className="viewAll text-center w-full mt-[3.125rem] md:mt-[4.0625rem]">
          <p className="text-desc2 font-NunitoSans text-[1rem] md:text-[1.125rem]">
            Want to see my professional work.{" "}
            <Link
              className="text-accent font-Poppins font-medium hover:text-accent2 underline underline-offset-8"
              to="/"
              title="Click here to View More"
            >
              Click here to View More
            </Link>
          </p>
          {/* View All */}
        </div>
      </div>
    </section>
  );
};

export default BlogPost2;
