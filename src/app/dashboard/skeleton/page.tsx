import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return "123456789".split("");
};

export default async function Page() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt="shadcn"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />

            <div>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button>Ver más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
