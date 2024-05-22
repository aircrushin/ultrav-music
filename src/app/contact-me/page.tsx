import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactMePage() {
    return (
        <>
        <section className="py-12 md:py-20 bg-gray-900 mt-10">
            <div className="mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-200">Get In Touch With Me</h2>
                <div className="max-w-2xl mx-auto mt-10 md:mt-16 lg:mt-20">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter your name" type="text" className="bg-gray-900 border-slate-500 focus:border-slate-700" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter your email" type="email" className="bg-gray-900 border-slate-500 focus:border-slate-700"/>
                            </div>
                        </div>
                        <div className="mt-6 text-gray-300">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Enter your message" rows={5} className="bg-gray-900 border-slate-500 focus:border-slate-700"/>
                        </div>
                        <div className="mt-10 text-center">
                            <Button type="submit" size="lg" className="bg-gray-200 text-black">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}