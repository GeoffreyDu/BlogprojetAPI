import React , {Component} from 'react'

class AddArticle extends Component{
  state={
    
  }

  render(){
    return(
      <div className="container">
        <h1>Ajouter un cours</h1>
        <form className="form-group" method="POST" action="http://localhost:5678/api/articles">
          <input className="form-control mb-3" type="text" name="titre" placeholder="entrer un titre"/>
          <input className="form-control mb-3" type="text" name="texte" placeholder="entrer le corps de l'article"/>
          <input className="form-control mb-3" type="date" name="date"/>
          <input className="form-control mb-3" type="checkbox" name="isPublished"/>Publié
          <button className="btn btn-dark" type='submit'>Ajouter</button>
        </form>
      </div>
    )
  }
}

export default AddArticle
