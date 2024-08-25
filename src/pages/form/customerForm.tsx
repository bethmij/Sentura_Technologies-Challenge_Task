import {CgFormatRight} from "react-icons/cg";
import {Button} from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";

export const CustomerForm = () => {
    return (
        <>
            <div className="absolute top-0 left-1/2 flex gap-x-5 -ms-32 mt-4 opacity-80">
                <CgFormatRight size="45"/>
                <h1 className="text-4xl ">Customer Form</h1>
            </div>

            <form className="w-4/5 h-4/5 ms-52 mt-32 flex-col rounded-full absolute "
                  onSubmit={()=>console.log("hi")}>
                <ScrollArea className="h-full w-full rounded-3xl z-0 ">
                    <div className=" form w-full h-full absolute border-2 -z-50 rounded-3xl opacity-100 "></div>
                    <div className="w-11/12 h-3 ms-12 border-t-2 bg-background  -z-50 bermuda absolute "></div>




                </ScrollArea>

                <Button type="submit"
                        className=" w-2/12 h-12 absolute text-2xl text-opacity-40 -bottom-10 right-0 m-5 mt-10">Submit</Button>
            </form>
        </>
    );
};
