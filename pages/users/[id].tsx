export const getStaticPaths = async () => {
  const res = await fetch('https://api.github.com/users?per_page=100&since=1000');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://api.github.com/users/' + id);
  const data = await res.json();

  return {
    props: { users: data }
  }
}

const Dynamic = (props) => {
  console.log(props);
  return <div>Dynamic</div>;
};

export default Dynamic;
