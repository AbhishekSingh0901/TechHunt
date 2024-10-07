import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";

const category = [
  "Software Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Data Analyst",
  "DevOps Engineer",
  "Cloud Architect",
  "UI/UX Designer",
  "Product Manager",
  "ML Engineer",
  "App Developer",
  "Systems Administrator",
  "Network Engineer",
  "Cybersecurity Analyst",
  "Blockchain Developer",
  "Site Reliability Engineer",
  "Database Administrato",
  "Quality Assurance",
  "IT Specialist",
];

function CategoryCarousel() {
  return (
    <div className=" text-white flex justify-center p-10 rounded-t-3xl">
      <Carousel
        className="w-full max-w-5xl flex items-center"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem className="basis-1/2 lg:basis-1/3" key={index}>
              <Button className="flex items-center justify-center p-4 text-xl">
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
