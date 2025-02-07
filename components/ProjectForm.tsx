"use client";
import React, { useState, useActionState } from 'react'
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import MDEditor from '@uiw/react-md-editor';
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";
import {formSchema} from "@/lib/validation";
import {z} from "zod";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";

const ProjectForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState<string>('');
    const { toast } = useToast();
    const router = useRouter();
    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            }
            await formSchema.parseAsync(formValues);
            console.log(formValues);
            // const result = await createProject(prevState, formData, pitch)
            // console.log(result);
            // if (result.status === "SUCCESS") {
            //     toast({
            //         title: "Success",
            //         description: 'Your project has been successfully submitted',
            //     });
            //     router.push(`/project/${result.id}`);
            // }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string, string>);
                toast({
                    title: "Error",
                    description: 'Please check your inputs and try again.',
                    variant: 'destructive',
                });
                return {...prevState, error: 'Validation failed.', status: 'ERROR'};
            }
            toast({
                title: "Error",
                description: 'An unexpected error occurred.',
                variant: 'destructive',
            });
            return {...prevState, error: 'An unexpected error occurred.', status: 'ERROR'};
        }
    }
    const [state, dispatch, isPending] = useActionState(handleFormSubmit, {error: '', status: "INITIAL"});
    return (
        <form action={dispatch} className={"project-form"}>
            <div>
                <label htmlFor="title" className={"project-form_label"}>Title</label>
                <Input
                    id={"title"}
                    name={"title"}
                    className={"project-form_input"}
                    required
                    placeholder={"Project title"}
                />
                {errors.title && <p className={"project-form_error"}>{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="description" className={"project-form_label"}>Description</label>
                <Textarea
                    id={"description"}
                    name={"description"}
                    className={"project-form_input"}
                    required
                    placeholder={"Project description"}
                />
                {errors.description && <p className={"project-form_error"}>{errors.description}</p>}
            </div>
            <div>
                <label htmlFor="category" className={"project-form_label"}>Category</label>
                <Input
                    id={"category"}
                    name={"category"}
                    className={"project-form_input"}
                    required
                    placeholder={"Project category"}
                />
                {errors.category && <p className={"project-form_error"}>{errors.category}</p>}
            </div>
            <div>
                <label htmlFor="link" className={"project-form_label"}>Image URL</label>
                <Input
                    id={"link"}
                    name={"link"}
                    className={"project-form_input"}
                    required
                    placeholder={"Project link"}
                />
                {errors.link && <p className={"project-form_error"}>{errors.link}</p>}
            </div>
            <div data-color-mode={"light"}>
                <label htmlFor="pitch" className={"project-form_label"}>Pitch</label>
                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id={"pitch"}
                    preview={"edit"}
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    textareaProps={{
                        placeholder: "Briefly describe the project, the problem it solves, and the tech stack used"
                    }}
                    previewOptions={{
                        disallowedElements: ["style"],
                    }}

                />
                {errors.pitch && <p className={"project-form_error"}>{errors.pitch}</p>}
            </div>
            <Button type={"submit"} className={"project-form_btn text-white"} disabled={isPending}>
                {isPending ? "Submitting..." : "Submit new project"}
                <Send className={"size-6 ml-2"} />
            </Button>
        </form>
    )
}
export default ProjectForm
