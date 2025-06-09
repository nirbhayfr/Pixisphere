import ProfileCard from "@/app/_components/ProfileCard";

async function page(props) {
     const params = await props.params;
     return <ProfileCard id={params.id} />;
}

export default page;
