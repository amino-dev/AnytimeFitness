import './css/community.css'

const cards = [
    {title : "COUPLE", desc : "Solidaires, faites vous coachés en duo avec votre partenaire, même si vos objectifs sont différents, vivez vraiment l'expérience !", logo : "data:image/png;base64,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"},
    {title : "FAMILLE", desc : "Et si vous invitiez les membres de votre famille à partager vos séances de sport, excellente idée pour vous et votre famille!", logo : "data:image/png;base64,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"},
    {title : "AMIS", desc : "Faites vos séances de sport avec vos ami(e)s proches pour partager des moments uniques ,magnifiques et inoubliables !", logo : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE4UlEQVRoge2aTWxUVRTHf+fN0Il1Y7owQDculMQFEYI6FaqJYDBBBQ3URGqxUt59UxMWGISFhmBMSGRhDMjMvDeFgPIRTdSVunClgEEIX5HEBQtcgRojGkuxFO5xMa9kGDr0vjdiapj/5rycr3v+ud93BlqYWpBm44Mg6FPVAHgIQFVPAWGlUtkLaK2vMWYVYBx8kxfSTLAxZhfwagPzriiKBtL4poGXNtD3/V6qhQ0DvrV2ejabnaGqJtatNsasBAiC4GVX37TINhE7CCAib4RhOFSjrxhjskAx9tmvqpP6quprwP60xaTuERGZE8vP6m3W2nHdnFo5ka/neZ/W5kuL1ESmGpohchLAWru83iAiy2N5MladauRboztZb0uCZuZICegGthpjxnK53CcAo6OjLwLvxkUWAVS1KCLzG/huBRCRYhO1NL387gRWT2RT1Z2VSmVNGt80+Dc2xF7AqOpcqA4na21YqVT2U7chBkHQG2+ec+p9BwcHZ127dm0dsALIiMietra2jdu3bx/9L4g0DWNMt6quF5HnuHnOvh9F0TqXPM3MkdQwxkxT1aWe561X1S4RAfgb2KOq73meN11VvwF6gdtDxPf9pZ7nbVLV2UBb0vhxiAiqCvAbUPI874NyufwrQKFQmBnbrGu+RESCIFimqp+rarNDcgw4paq7RWR3FEUjAIVCYa61dqO1dgWAqu52TZiIiKq+TXVebc1ms+8Ui8XhJPGNEATBIlXdYK1dXKP+ubOz8y3XHM5EjDGzqR6/f8/lcptcV5NGKBQK96rqIlV9XVUfjtV/ARHQD0w/f/78g8APLvmS9EhfLD9OQsIYcxiYX6+39obh/wuwLZPJlEql0kVjTDvVA2cfsMGlHacjSk9PT4bqCoKIfOQSU4ObSMQYAb4DCleuXLkviqItpVLpYl0bvXHbk8KpRzo6Ohaq6kzgbBiGRwB83//e8zwbhuFjLjmiKLrlAlGbLwzDI8aYs8ADHR0dC4GvJ8vv1COquiqW16+kIvKoqna5xLugLp/GbaGqfbcIuw7X0+8zcWP7kpeYDjVtLXHxv7PuIyLyZfz5ym2spb7NVfHnVy7+rj0SxXKNMWZa4qoSYvPmzVlVHQCw1kaT+YMjkTAMvwXOADNUdWn6Et1w4cKF54FO4MehoaFDLjHOc0REolgW0pWXCIOx3IHjw50zEVX9ELgELPJ9f1by2twwMDBwv6o+SfW9a69rnDORKIr+BA4A4nnetuQluiGTyewAREQOxG06IdHya63dAvyhqk8nLTABFgMXRWRLkqBERIaGhs55nvc4DZZEY8xB3/cnnZy+7x8yxhxsYP5CRLrL5fJPSWpLfEMsl8tngCXGmIkm4QKp3luFW0xSEVnQyBZF0bNJa4I7bWf/P6BFZKqhRWSqoUVkqqFFZKqhRYT4LDX+gLZ27drcuKG/vz9Xa4Pq9bVeNx5To0v97wenV7yJMG/evH7gnvb29pF8Pn96bGzsTeAJgEwmI/l8/mgul1sHPAUwPDw8ks/nT9fqrl69SldX17Ea3bnjx4+nuuuk/nnA9/1eEam/wV2K5d0OKS4Dd91QjMjKMAwPpKkn9dCqVCr7RKQHOEH1HfeYqnbH95Vj4zrgBVVdFn9fBs6o6kuq+oiqHo39TqjqirQkWpiK+AfoNw3tgipBEwAAAABJRU5ErkJggg=="},
    {title : "TRAVAIL", desc : "Sur la pause déjeuner ou en fin de journée dépensez-vous avez vos collègues de travail, défoulez et amusez vous !", logo : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFRUlEQVRoge2ZX4hUVRzHP7+5s8tahjOrQWZFf8kCtdIUIjOrB8XQehgzaCl25p4dNjJWwSIKtiiwF/NPunPPjLuRmNlIpKBl+FK+KKZbWQQm+FAorbmjsoqtc+/pYe/INjs7Ozp3UDa/L/fO+f073/s7v3vO7w5cx7UFKSdUSplaBtdal41/OQgF5ehqI1yJUpBPDmqT6VGTkVFD5NKSKZfuwtKqdfEPjnW5GDUZGVLs5Z5I0EU/GNVme9RkZNQQGXEfKU55qeUVlE41+P9kpJInF5RONRg1GRk1RK4X+7WGUVPsFfUj1aCtrW1MX1/fIhF5AZgM3AacyOVyD2SzWbegVy3Rmi6tlpaWJ86dO3dYRLYAzzFAZCxwXyQScZRSc4OKVYtiX6a1/si27WeMMbuAOuAI0AXsB6YAa0QkDsSVUjtc111uWdZLwALgHgbaizu11mcCI3KZOJDL5dbG4/FGEfnCJ7EaWKG1vgjQ3t6+9/jx4yeAu4DlwELLshYWOxKRL1taWj4zxnxasC2HIY1VEEWplHoL+EBEdjuOMx8oeURPJBLTQ6HQAX8eO0Rkk+d5YX8pFrAfeEprfb5czFrVyFwAY8wqhiEBkMlkDgL7/J/rHcfZlk6nPwemi8gS4CgwC2gfKWCtiNwB4HneTxXoHgUQkUmFAa31IcdxtoZCocX+UDMjfIMLtNhF5B3Hcd4HzgOEw+FKavAm/zpk6aRSqW6l1Eng5ubm5omdnZ3Hh3MSdEam+NdfAIwxM8opx2IxC3jM1/1hGLX+SgLXamf/07/GgO3D2UWj0QeBCUB/f3//qWJ5a2vrLfl8/lbgr3LZgNrVyGIAz/M2l1PSWh8GdgP1dXV1jxfL8/n8IkBE5NhIAWtFpJChsu//pqamG4G7/Z8XiuV1dXXbgAvGmJlKqXHlfAW9s/+stZ4mIo4xZqWI7E4mkzNSqVR3Kd8NDQ2fAPcDv4rId8Xynp6e09Fo9B+g4eLFi/Xl5hl0RqYmEonZjuN8CGwCQp7nPTmcsojMAvA8L1Zq945EIpuAcSJysKur62S5wDU7xotIhzGmCVieTCY3p1KpnsHyRCIxHbgd+COTyfxWbO8fc14ELriu2zTSHGp2+nUcZ58xZjswyfO8b4cEDoU6AURkdSn7cDg807/tLkV0iL9qJjsCjIi87N9PKyGfCtDb2/txSWNjXgcQkWFf34NR055da31GKVXWfzabHW7DmwdQX1/fMdIcocaNlVJqQrU669atO1tJrJoVu23bDwEbAURkb7FcRPYaY2aLyDe2bSfS6fSPRSoXgAal1AKt9c6R5hB4RmzbnqOU2iUih4BHgCOhUOiVIYEHxn43xkwXkUNKqV22bc8pyI0xa/zbHUqpLbZtP1oubmCNVTwev9eyrLXAfH+oD3DC4XD7hg0b+krZtLa2js3n8+1ACwO9PMDXrusuPXv27LFIJLJCRNqBwmb4ved5b2cymaEZDoKIUmoWsBMYD5wGVrmuu37jxo29ldjH4/FGy7JeBZYBEeAUsEBrvT+ZTE5yXfc1EWnxZRhjUiKydPAmWjURpdREBo7tjcBXgK21/vtyfAzyNQFIM/DFpceyrMkdHR05uJS9NuBN4AZjzPZ0Ov08fgda0Z+hpVAgbNv2ShF5A9iTy+XmDf5WdSWIxWJWNBrdDTwNvKu1/k+bm0wmH/Y8bw/QKCJLHMfZCgEUu4g8CwP9ebUkALLZrCsiq3yf84vlqVSq2xjzHoDnefFL86g2sFLqPDCmWj9XiF6t9XgI5vV7tUgANMZisbLH++u4WvgXA3orBzSPYVcAAAAASUVORK5CYII="}
]

function Community(props){
    return(
        <div className="text-center mx-3 mb-5">
            <img  src={props.logo} alt="atout-logo" className="mb-4"/>
            <h3  className="mb-3 community-title">{props.title}</h3>
            <hr className="mb-4 d-block mx-auto hr"></hr>
            <p className="mb-4 community-desc">{props.desc}</p>  
        </div> 
    )
 }
 
 function Communities() {
    return(
     <div className="container mt-5 pt-2">
       <div className="cards">
          {cards.map(element =>
            <div>
               <Community title = {element.title} desc = {element.desc} logo = {element.logo}/>     
            </div>
          )}
       </div>
     </div>
    )
 }
 export default Communities