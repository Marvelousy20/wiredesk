import Image from "next/image";

const profileDetails = () => {
  return (
    <section>
      <div className="relative">
        <Image
          src="/messages/i-avatar.svg"
          alt="avatar"
          width={45}
          height={45}
        />

        <Image
          src="/messages/instagram.svg"
          alt="instagram"
          width={12}
          height={12}
          className="absolute top-full"
        />
      </div>
    </section>
  );
};

export default profileDetails;
