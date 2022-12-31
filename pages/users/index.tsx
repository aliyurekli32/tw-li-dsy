import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Users = (props) => {
  console.log(props.post);
  const router=useRouter()
  const data=props.post
  const [page, setPage] = useState(1);
  const [time, setTime] = useState(true);
  
  const totalPage = data?.length / 4;

  let pageNumbers: number[] = [];
  for (let i = 0; i < data?.length / 4; i++) {
    pageNumbers = [...pageNumbers, i + 1];
  }
  

 
  const handlePage = (e, i = 0) => {
    if (i !== 0) {
      setPage(i);
    }
    if (e.target.value === "Before" && page > 1) {
      setPage(page - 1);
    } else if (e.target.value === "Next" && page < 25) {
      setPage(page - 0 + 1);
    }

    if (
      e.target.value < 26 &&
      typeof +e.target.value === "number" &&
      !isNaN(Number(e.target.value))
    ) {
      setPage(e.target.value);
    }
  };
  const filteredData = data?.filter((item:Object, index: number) => {
    if (
      (page - 1) * 4 === index ||
      (page - 1) * 4 + 1 === index ||
      (page - 1) * 4 + 2 === index ||
      (page - 1) * 4 + 3 === index
    ) {
      return item;
    }
  });

  useEffect(() => {
    const a=setTimeout(()=>{
      setTime(false)
    },1000)
  
    return () => {
     clearTimeout(a)
    };
  }, []);
  
  
  return (
    <>
      <div className="mt-24"></div>

      {!!time
      ? <div>Loading</div> 
      : <div className="container text-center p-5 mx-auto">
        <div className="flex flex-row flex-wrap justify-center items-center" >
          {filteredData?.map((i: any) => {
            return (
              
                <div key={i.id} className="card lg:w-[45%] text-center md:card-side bg-base-100 m-1 shadow-xl hover:scale-[1.05] hover:drop-shadow-2xl transition-all">
                  <Link href={'/users/' + i.id}>
                    <figure>
                      <img
                      className="w-[400px] h-[400px]"
                      src={i.avatar_url}
                      alt="Album"
                      />
                    </figure>
                  </Link>
                  
                  <div className="card-body">
                    <h2 className="card-title mx-auto uppercase">{i.login}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Github</button>
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div>

        <div className="btn-group">
          <button
            onClick={(e) => handlePage(e)}
            value="Before"
            className="btn"
          >
            Before
          </button>
          {page < 25 && (
            <button
              onClick={(e) => handlePage(e)}
              value={+page}
              className="btn bg-red-900 hover:bg-red-700"
            >
              {+page}
            </button>
          )}
          {page < 24 && (
            <button
              onClick={(e) => handlePage(e)}
              value={+page + 1}
              className="btn"
            >
              {+page + 1}
            </button>
          )}
          {page < 23 && (
            <button
              onClick={(e) => handlePage(e)}
              value={+page + 2}
              className="btn"
            >
              {+page + 2}
            </button>
          )}

          <div className="dropdown !rounded-none">
            <label
              tabIndex={0}
              className="btn !rounded-none "
            >
              ...
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content  !rounded-none menu shadow bg-base-100 overflow-scroll h-40 w-16 block"
            >
              {pageNumbers?.map((i) => {
                return (
                  <li key={i}>
                    <a onClick={(e) => handlePage(e, i)}>{i}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            onClick={(e) => handlePage(e)}
            value={+totalPage}
            className={`btn ${
              +page === 25 ? "bg-red-900 hover:bg-red-700" : ""
            }`}
          >
            {+totalPage}
          </button>
          <button
            onClick={(e) => handlePage(e)}
            value="Next"
            className="btn"
          >
            Next
          </button>
        </div>
      </div> }
      
    </>
  );
};

export default Users;

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {
    const res=await fetch(`https://api.github.com/users?per_page=100&since=${1000}`)
    const data=await res.json()
    console.log(data);
  return {
    // Passed to the page component as props
    props: { post: data },
  }
}
