import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <h1>Home</h1>
      <p>This is my webpage!</p>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper 
          porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Curabitur sodales ligula in libero. 
      </p>
      <p>
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
          Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, 
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. 
      </p>
      {/* <p>
          Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, 
          urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. 
      </p> */}
    </div>
  );
}