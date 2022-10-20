import fileLogo from "../../imgs/Vector.png";

function FormPage() {
    return (
        <section className="formPageSection">
            <p className="formPageSection__p">Имя</p>
            <input type="text" className="formPageSection__textInput"/>
            <p className="formPageSection__p">Фамилия</p>
            <input type="text" className="formPageSection__textInput"/>
            <p className="formPageSection__p">Отчество</p>
            <input type="text" className="formPageSection__textInput"/>
            <p className="formPageSection__p">Фото</p>
            <input type="file" className="formPageSection__fileInput"/>
            <label htmlFor="file-upload" className="formPageSection__fileInputLabel">
                <img src={fileLogo} className="formPageSection__fileLabel__img"/>
            </label>
            <input id="file-upload" type="file" className="formPageSection__fileInput"/>
            <button className="formPageSection__button">Сохранить</button>
            <p className="formPageSection__p">Response</p>
            <textarea type="text" className="formPageSection__textInput response"/>
        </section>
    );
}

export default FormPage;