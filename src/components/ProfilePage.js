import React, { Component } from 'react';
import Navbar from './Navbar'
import firebase from 'firebase';
import base, {firebaseApp} from '../components/Firebase/firebase'
import './ProfilePage.css';

function mapObject(object, callback) {
    if(object != null){
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
    }else{
        
    }
  }

class ProfilePage extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            profile: null,
            distance: ''
        }
        //this.getDistance=this.getDistance.bind(this);
        var user = firebase.database().ref('Users/' + this.props.id);
        user.once('value', function(snapshot) {
            console.log(snapshot.val());
            
            
        }).then((snapshot) => {
             this.setState({
                profile: snapshot.val(), 
                distance: "8 miles away"
            // }, ()=>{
            //     this.getDistance();
             });
        })

        
    }

    //  componentWillMount() {
        
    //     var user = firebase.database().ref('Users/' + this.props.id);
    //     user.once('value', function(snapshot) {
    //         console.log(snapshot.val());
            
            
    //     }).then((snapshot) => {
    //          this.setState({
    //             profile: snapshot.val()
    //         });
    //     })
        
    //     // API Call to find data using the id above 
    //     // Store result of query in a variable called user
    //     // DONT REMOVE COMMENTED CODE BELOW
    //     // this.setState({
    //     //     profile: {
    //     //         first_name: 'Neeraj',
    //     //         last_name: 'Samtani',
    //     //         age: 18
    //     //     }
    //     // })
    //     // axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     //     .then(res => {
    //     //         this.setState({
    //     //             post: res.data
    //     //         })
    //     //     })
    // }

    //  getDistance(){
    //     var refer= this;
    //     var z1;
    //     var z2;
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //             firebase.database().ref('Users/' + user.uid).once('value', function(snapshot) {
    //         console.log(snapshot.val());
    //     }).then((snapshot) => {
    //          z1=snapshot.val().zip;
    //          console.log(z1);
    //          z2=refer.state.profile.zip;
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     const url= 'https://www.zipcodeapi.com/rest/'+'uGSC7Zn8YKoaJ2JVTwUC4xwCtiQ59wxwlLkO0AhZOqZQJkqkVPCb2qMtjYrJoIjD'+'/distance.json/'+z1+'/'+z2+'/mile';
    //     const xyz =  axios.get(proxyurl+url, {headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //       },responseType: 'json'})
    //         .then(res => {
    //             console.log(res);
    //             if(parseInt(res.data.distance,10)==0)
    //             {
    //                 refer.setState({
    //                     distance: "Less than a Mile"
    //                 })
    //             }
    //             else if (parseInt(res.data.distance,10)==1)
    //             {
    //                 refer.setState({
    //                     distance: "1 Mile"
    //                 })
    //             }
    //             else {
    //                 refer.setState({
    //                     distance: parseInt(res.data.distance,10).toString() + " Miles"
    //                 })
    //             }
                
    //         })
    //     })
    //         } else {
    //           // No user is signed in.
    //         }
    //       });
          
    //       console.log(z2);
        

    //}

    render() {
        
        console.log(this.state.distance);
        const post = (this.state.profile) ? (
            (this.state.distance!='')? (
            <div className="profile">
            
                {/* <img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg" alt=""/>
                <h4 className="center">{this.state.profile.name}</h4>
                <p>{this.state.profile.age}</p>
                <p>{this.state.profile.role}</p>
                <p>{mapObject(this.state.profile.skills, function (key, value) {
                    return <div>{value}</div>;
                })}</p>
                <p>{this.state.profile.education}</p>
                <p>{mapObject(this.state.profile.work_experience, function (key, value) {
                    return <div>{value}</div>;
                })}</p>
                <p>{mapObject(this.state.profile.links, function (key, value) {
                    return <div>{value}</div>;
                })}</p>
                <p>{this.state.profile.zip}</p> */}
                <div className="card profile-head-card" id="profile-head">
                    <div id="photo-name-role">
                        <img src={this.state.profile.photoURL} className="profile-photo"/>
                        <div className="name-profile">
                            <h1>{this.state.profile.name}</h1>
                            <h2>{this.state.profile.role}</h2>
                        </div>   
                    </div>
                    {console.log(this.state)}
                    <div className="distance-rating">
                        <div className="row-distance-rating distanceNumber">
                        Proximity: {this.state.distance} &nbsp;<i class="fas fa-map-marker-alt fa-lg"></i>
                        </div>
                        <div className="row-distance-rating ratingNumber">
                        Rating: {this.state.profile.rating}&nbsp;<i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-credentials-skill">
                        <div className="cardContainer">
                        <div className="card biography-card" id="profile-credentials">
                            <div className="card-row"><h3>Bio</h3></div>
                            <div className="card-row"><i class="fas fa-clock">&nbsp;&nbsp;</i>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.profile.age}</div>
                            <div className="card-row"><i class="fas fa-map-marked-alt">&nbsp;&nbsp;</i>Location&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{this.state.profile.city}</div>
                            <div className="card-row"><i class="fas fa-book">&nbsp;&nbsp;&nbsp;</i>Education&nbsp;&nbsp;: &nbsp;{this.state.profile.education}</div>
                        </div>
                        </div>
                        <div className="cardContainer">
                        <div className ="card skills-card" id="profile-skill">
                        <div className="card-row"><h3>Skills</h3></div>
                        <div className="work-experience">{mapObject(this.state.profile.skills, function (key, value) {
                                return <div className="card-row" key={key} > &#9658;&nbsp;&nbsp;{value.name}</div>;
                            })}</div>
                        </div> 
                        </div>
                        
                        </div>
                    <div className="profile-workexp">
                    <div className = "cardContainer">
                    <div className="card profile-workexp-title"><h1 id = "special-work-title">Work Experience</h1></div>
                    <div>
                        </div>
                    
                    {
                    
                    mapObject(this.state.profile.work_experience, function (key, value) {
                    return <div className="profile-workexp-card" key={key}>
                                <div className="card workexp-special-card">
                                <div className="card-body">
                                    <div className="card-row"><h5 id = "specialText01">{value.title}</h5></div>
                                    <div className="card-row">duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;&nbsp;&nbsp;&nbsp;&nbsp;<h5 id = "specialText02">{value.duration}</h5></div>
                                    <div className="card-row">location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;&nbsp;&nbsp;&nbsp;<h5 id = "specialText02">{value.location}</h5></div>
                                    <div className="card-row">role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;&nbsp;&nbsp;&nbsp;<h5 id = "specialText02">{value.role}</h5></div>
                                    <div className="card-row">description&nbsp;&mdash;<br/></div>
                                    <div className="card-row"><p className="card-text" id = "specialDescription">{value.description}</p></div>
                                </div>
                                </div>
                            </div>
                    })
                }
                
                
                </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        )):(
            <div className="center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        )
        return (
            <div>
                {post}
            </div>
        )
    }
}

export default ProfilePage