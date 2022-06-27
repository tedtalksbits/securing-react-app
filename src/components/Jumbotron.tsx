interface IJumbotronProps {
    title: string;
}

const Jumbotron = ({ title }: IJumbotronProps) => {
    return (
        <div className="jumbotron">
            <h1>{title}</h1>
            <p className="lead">Kickin' it old school.</p>
        </div>
    );
};

export default Jumbotron;
