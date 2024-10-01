import LoginForm from "./components/form";

const page = () => {
  return (
    <>
      <section className="flex h-[85vh]  flex-col items-center justify-center">
        <div
          id="container"
          className="py-4 px-10 sm:mx-auto sm:w-full sm:max-w-md  bg-[#FBFBFB] rounded-lg  shadow-md shadow-black/5 dark:bg-slate-900 dark:shadow-black/10 "
        >
          {/* <AuthForm /> */}
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default page;
