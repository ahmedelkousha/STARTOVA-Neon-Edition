import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const PHONE_NUMBER = "201234567890"; // 🔥 replace with your number (no +)

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  service: z.string().min(2, { message: "Please specify the service needed." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const text = `
New Inquiry 🚀

Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Service: ${values.service}

Message:
${values.message}
    `;

    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-xl bg-black/5 border border-white/10 rounded-2xl p-5 sm:p-6">
      <h3 className="text-xl font-semibold mb-4 text-foreground">
        Start Your Project
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input placeholder="Your Name" className="input" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input placeholder="Phone Number" className="input" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    placeholder="Email Address"
                    type="email"
                    className="input"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    placeholder="Service Needed (e.g. Website, Marketing...)"
                    className="input"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="input resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mt-4 bg-primary hover:bg-white text-white hover:text-primary duration-300">
            Send via WhatsApp
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
