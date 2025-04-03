
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCheck } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  requestTypes: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one type of request.",
  }),
  additionalInfo: z.string().optional(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

const DataRights: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      requestTypes: [],
      additionalInfo: "",
      agreeTerms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.success("Data rights request submitted successfully");
    form.reset();
  };

  return (
    <div className="container max-w-4xl py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Data Rights</h1>
        <p className="text-muted-foreground">
          Request access, modification, or deletion of your personal data in accordance with privacy regulations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Data Rights</CardTitle>
          <CardDescription>
            Under various privacy regulations including GDPR, CCPA, and others, you have certain rights regarding your personal data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border bg-muted/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Right to Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You have the right to request a copy of all personal data we hold about you.
                </p>
              </CardContent>
            </Card>
            <Card className="border bg-muted/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Right to Rectification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You can request that we correct any inaccurate or incomplete information about you.
                </p>
              </CardContent>
            </Card>
            <Card className="border bg-muted/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Right to Erasure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Also known as the 'right to be forgotten', you can request that we delete your personal data.
                </p>
              </CardContent>
            </Card>
            <Card className="border bg-muted/40">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Right to Object</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You have the right to object to the processing of your personal data for certain purposes.
                </p>
              </CardContent>
            </Card>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <FormLabel className="text-base">Request Type</FormLabel>
                <FormDescription>
                  Select the type of data rights request you want to submit.
                </FormDescription>
                <div className="grid gap-4 pt-2">
                  <FormField
                    control={form.control}
                    name="requestTypes"
                    render={() => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            value="access"
                            checked={form.watch("requestTypes").includes("access")}
                            onCheckedChange={(checked) => {
                              const current = form.getValues("requestTypes");
                              if (checked) {
                                form.setValue("requestTypes", [...current, "access"]);
                              } else {
                                form.setValue("requestTypes", current.filter(item => item !== "access"));
                              }
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium">
                            Data Access Request
                          </FormLabel>
                          <FormDescription>
                            Receive a copy of your personal data
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="requestTypes"
                    render={() => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            value="rectify"
                            checked={form.watch("requestTypes").includes("rectify")}
                            onCheckedChange={(checked) => {
                              const current = form.getValues("requestTypes");
                              if (checked) {
                                form.setValue("requestTypes", [...current, "rectify"]);
                              } else {
                                form.setValue("requestTypes", current.filter(item => item !== "rectify"));
                              }
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium">
                            Data Rectification Request
                          </FormLabel>
                          <FormDescription>
                            Correct or update your personal data
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="requestTypes"
                    render={() => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            value="delete"
                            checked={form.watch("requestTypes").includes("delete")}
                            onCheckedChange={(checked) => {
                              const current = form.getValues("requestTypes");
                              if (checked) {
                                form.setValue("requestTypes", [...current, "delete"]);
                              } else {
                                form.setValue("requestTypes", current.filter(item => item !== "delete"));
                              }
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium">
                            Data Deletion Request
                          </FormLabel>
                          <FormDescription>
                            Request deletion of your personal data
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <FormMessage />
              </div>
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-4">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I confirm that the information provided is accurate and I am the data subject
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit Request <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4 bg-muted/30">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <CheckCheck className="h-4 w-4" />
            <span>We typically process data rights requests within 30 days</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DataRights;
