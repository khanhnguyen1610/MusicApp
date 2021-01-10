import React from 'react'
import {Link} from 'react-router-dom'
import songList from './SongList';


function List({ songList,index }) {
  
    return (
      <div className='nameSong'>
        <Link to='/'>{index+1} . {songList}</Link>
          
        
      </div>
    );
  }
function ListView() {
    const listTitle = songList.map((songs) => {
        return songs.title;
      });
      
      return (
        <div>
          {listTitle.map((songList,index) => (
            <List 
                songList={songList} 
                index={index}
            />
          ))}
        </div>
      );
}

export default ListView
