import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

type TeamMemberProps = {
  name: string;
  role: string;
  imgSrc: string;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imgSrc }) => {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt={name}
          src={imgSrc}
          className="shadow-lg rounded max-w-full mx-auto"
          style={{ maxWidth: 300 }} // Adjust the maxWidth here
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">{role}</p>
          <div className="mt-6">
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button
              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button
              className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button
              className="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FourthBody = () => {
  return (
    <React.Fragment>
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">The core of our team</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment of people and great talent that truly rocks.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <TeamMemberCard
              name="Morgan Drew"
              role="Manager"
              imgSrc="https://s3-alpha-sig.figma.com/img/ee5e/d0fe/287f5c7f001f3f3ccfd70ff4efd383a0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C5enUV4DOOdW8A~Tv4Q9YxlNd8rOfq5U7R3MGVHIdX0VNtQ4pT29ADZQEBPKSd1lGItsaNRF~jWbz20MjIQOW8ezd8xPReHe0upcPZNarJVF~cDhuoQYBt21r8bgA783Ko-9UCXDKdUs9vgfbzhphZdqP7mRcep67VdmsTBvhLZMT53U0uzFvgSLWLrfAo9~Ql6DA4E4T1zvJetXlLjJtNCBNC95Et5-8td0-qJmOwJh3jXuznpbRVFkRAaLFSygpU-98ErDS4~FGNnxcBMwFNAkTvG5z1RylBmumzU52k6zewx09-hz3w32tKhYZxWO6qgC7ZxRXD-S7721a3DlrA__"
            />
            <TeamMemberCard
              name="Jeffery Walker"
              role="Lead Designer"
              imgSrc="https://s3-alpha-sig.figma.com/img/b458/ecbc/bd2cd80323072b725f36354f24c56b53?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pvj5Uk9t92JlLRDWTaKD0DzkIZyHRZ8Gqkf-e~s~gZbbJG3~vOvdusMtqFY~ETvi4EoZOmd7WrmrNw7UyxJSSRz3Oz5pspjsMmVd0FhqemSgKzFIHIWOGDqiokr6Js2i3hWpkCeTwoE7WLZii~hU0J18vk1uGQMHaCefdpz4VCQIZrWIaVSR7fnFH8PtQXaMI~3y5aKFxd~K11Lh6M7xFFrfFfp8XZK4EDQRB0jRZSeyRN6PPV9~JxJLMfGhffGXpEF9-0KdecLIqT-4AQAkZdVcC5foXsRYS1b4bnY9uaqUDVPEJ9i8W8RcLPG90Fy6dYcIBN5MUJcnBlHVnFf83A__"
            />
            <TeamMemberCard
              name="Andrew Steve"
              role="UI/UX Designer"
              imgSrc="https://s3-alpha-sig.figma.com/img/8d99/8df7/a82eaeb6be6d09fa9be67c286c91886d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMxYk4XNCKLnib-Rp3ukhwBc39ryO0K~99lsH32LSuc3m6KCM0p0cq4v80NU4G9TMlG1yowO-7PnC0l5iVmEF1j5aFvdJUzULD4h4LV2DioiiFn1kTy~jySkDBIGjq0VrrbeoKzxzUSWQ85uJOGcq8aeWfxRKsgMKl~Zqm5LF2~QS3OBVuajERoxRn5yNVZAPn6yNxBv~DsQ68d7z3yNyXfe8qYaKMF5E92kJbFDTNZ6J25HqRCTOc3xLXlKfzk6D~QItfSzAwKQ41NFYg2WHap5-PR3AaiuZMch2tlPq85bzrpno4qikfKX4v6XjAvewozHuVhrpLvQN13ynXnTag__"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FourthBody;
