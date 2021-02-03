import styles from '../../styles/List.module.css'
//This function will excute while our application is build || our components rendered 
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json()

  return {
    props: { lists: data }
  }
}

const List = ({ lists }) => {
  return (
    <div>
      <h1>All list</h1>
      {lists.map(list => (
        <div key={list.id}>
          <a className={styles.single}>
            <h3>{list.name} - {list.email}</h3>

          </a>
        </div>
      ))}
    </div>
  )
}

export default List