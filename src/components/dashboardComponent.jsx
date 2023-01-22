import MenuComponent from "./menuComponent"

export default function DashboardComponent(props) {

    return (
        <main className="">

            <MenuComponent />
            <section className="contenido-pagina min-h-screen">
                {props.children}
            </section>
        </main>

    )

}