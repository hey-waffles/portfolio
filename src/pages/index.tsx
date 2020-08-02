import Link from "next/link";
import Page from "../components/Page";

export default function Index() {
  return (
    <Page>
      <div className="construction-message">
        <h1 className="text-center">Woah, hey!</h1>
        <h2 className="text-center">
          It looks like a new portfolio is under construction!
          Our construction owls are hard at work, but we're not quite done yet. 
          We apologize for the inconvinence. 
          If you would like to see Laura's old portfolio site,&nbsp;
          <Link href="/old-version" passHref>you can check it out here!</Link>
        </h2>
      </div>
    </Page>
  );
}