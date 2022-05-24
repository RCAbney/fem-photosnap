import Layout from "../components/Layout.js/Layout";
import TextBesidesImage from "../components/TextBesidesImage/TextBesidesImage";
import beautifulStories from "../assets/home/desktop/beautiful-stories.jpg";
import createAndShare from "../assets/home/desktop/create-and-share.jpg";
import designedForEveryone from "../assets/home/desktop/designed-for-everyone.jpg";

export default function Home() {
  return (
    <Layout>
      <TextBesidesImage image={createAndShare} dark />
      <TextBesidesImage image={beautifulStories} leftImage />
      <TextBesidesImage image={designedForEveryone} />
    </Layout>
  );
}
