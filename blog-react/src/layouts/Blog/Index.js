import Header from "../../components/Header/Header";
const Index = ({ children }) => {
    return (
        <div className="home-body">
            <Header />
            {children}
        </div>
    );
}
export default Index;
