import Layout from "../../components/layout/Layout";
import MeetupList from "../../components/meetups/MeetupList";

const DUMMY = [
  {
    id: "m1",
    title: "london",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: "london, united kingdom",
    description: "Must visit place in the world",
  },
  {
    id: "m2",
    title: "Amazon Forest",
    image:
      "https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
    address: "Amazon Forest, united states",
    description: "Nature",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY} />
    </Layout>
  );
}

export default HomePage;
