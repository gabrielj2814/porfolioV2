import MenuComponent from "./menuComponent"

export default function DashboardComponent(props) {

    return (
        <main className="">
            <MenuComponent />
            <section className="contenedor-contenido min-h-screen">
                {props.children}
            </section>
        </main>

    )

}