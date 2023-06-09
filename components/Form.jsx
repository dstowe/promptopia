import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform</p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>

          <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder="Write your post here" required name="textarea" className="form_textarea " />
        </label>

        <label htmlFor="tagSelect">Select a tag:</label>
        <select id="tagSelect" value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} required className="form_input">
          <option value="">Select a tag</option>
          <option value="#Angular">#Angular</option>
          <option value="#C#">#C#</option>
          <option value="#Django">#Django</option>
          <option value="#Flutter">#Flutter</option>
          <option value="#Java">#Java</option>
          <option value="#JavaScript">#JavaScript</option>
          <option value="#Kotlin">#Kotlin</option>
          <option value="#MongoDB">#MongoDB</option>
          <option value="#MySQL">#MySQL</option>
          <option value="#Next.js">#Next.js</option>
          <option value="#PHP">#PHP</option>
          <option value="#PostgreSQL">#PostgreSQL</option>
          <option value="#Python">#Python</option>
          <option value="#React">#React</option>
          <option value="#React Native">#React Native</option>
          <option value="#Ruby on Rails">#Ruby on Rails</option>
          <option value="#SQLite">#SQLite</option>
          <option value="#Swift">#Swift</option>
          <option value="#Vue.js">#Vue.js</option>
          <option value="#Xamarin">#Xamarin</option>
        </select>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
