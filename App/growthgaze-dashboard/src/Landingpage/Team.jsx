// Team-Daten mit Namen, Profilbildern, Aufgaben und optionalen Links
const team_data = [
    { vorname:"Luan",  profileImg: "/Team/Luan.jpg", task:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"},
    { vorname:"Chai",  profileImg: "/Team/Chai.jpg", task:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", link:"https://www.instagram.com/c.srcht/?igsh=OWZqZDdsb2hvcXl5&utm_source=qr"},
    { vorname:"Nikan", profileImg: "/Team/NikanCool.jpg", task:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", link:"https://n1kan.github.io/myCV/"},
    { vorname:"Wael",  profileImg: "/Team/Wael.jpg", task:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", link:"https://younes-wael.github.io/Resume/"}
];

const Team = () => {
    return (
        <section className=" bg-[#151D48]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

                {/* Überschrift für den Team-Abschnitt */}
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#00df9a] ">
                        Our Team
                    </h2>
                    <p className="font-light text-white lg:mb-16 sm:text-xl ">
                        See the Team behind GrowthGaze.
                    </p>
                </div>

                {/* Grid-Layout für Team-Mitglieder */}
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {team_data.map((data, index) => {
                        return (
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex " key={Math.random()}>
                                <a href={data.link || "#"}>
                                    <img
                                        className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg  max-h-80 max-w-80 items-center justify-center flex"
                                        src={`${data.profileImg}`}
                                        alt={data.vorname}
                                    />
                                </a>

                                 {/* Team-Mitglied Infos */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                                        <a href={data.link || "#"}>
                                            {data.vorname}
                                        </a>
                                    </h3>
                                    <p className="mt-3 mb-4 font-light text-gray-500 ">
                                        {data.task}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team
