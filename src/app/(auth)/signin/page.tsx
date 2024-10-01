import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components";

export default function Page() {
  return (
    <div>
      <Card className="mx-auto my-10 w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
