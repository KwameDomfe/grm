import MinToBelievers 
    from "../../components/organisms/ministries/MinToBelievers"
import MinToGod 
    from "../../components/organisms/ministries/MinToGod"
import MinToUnbelievers 
    from "../../components/organisms/ministries/MinToUnbelievers"


function MinistriesLandingPage() {
    return (
        <div>
            <section className="flex items-center justify-center
                min-vh-50 "
            >
                <MinToGod />
            </section>
            <section className="flex items-center justify-center 
                min-vh-50 
                bg-black-50"
            >
                <MinToBelievers />
            </section>
            <section className="flex items-center justify-center
                min-vh-50 "
            >
                <MinToUnbelievers />
            </section>
        </div>
    )
}

export default MinistriesLandingPage
