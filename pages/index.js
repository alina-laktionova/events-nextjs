import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
import NewsletterRegistration from "@/components/input/newsletter-registration";

const HomePage = (props) => {
  return (
    <>
      <NewsletterRegistration />
      <EventList items={props.featuredEvents} />;
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}
