import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { ErrorMessage } from "../../components/ui/ErrorMessage";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { createIdea } from "../../services/ideaService";

const initialForm = {
  title: "",
  description: "",
};

export function IdeaForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!formData.title.trim() || !formData.description.trim()) {
      setError("Title and description are both required.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await createIdea({
        title: formData.title.trim(),
        description: formData.description.trim(),
      });

      setSuccessMessage(response.message || "Idea analyzed successfully.");
      setFormData(initialForm);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="title">
            Startup idea title
          </label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="AI assistant for hyperlocal food brands"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="description">
            What does it do?
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the product, target users, pain points, and why the timing is right."
          />
        </div>
      </div>

      <ErrorMessage message={error} />

      {successMessage ? (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {successMessage}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          AI will generate summary, customers, market, competitors, risk, and score.
        </div>
        <Button className="sm:min-w-[200px]" isLoading={isSubmitting} type="submit">
          Analyze Idea
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
