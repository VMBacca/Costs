import savings from "../../img/savings.svg";
import styles from "./Home.module.css";
import LinkButton from "../Layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Welcome to <span>Costs</span>
      </h1>
      <p>Start managing your projects right now!</p>
      <LinkButton to="/newproject" text="Create your project" />
      <img src={savings} alt="Costs" />
    </section>
  );
}
export default Home;
