import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      // cathing list
      let list = await Tmdb.getHomeList()
    }
  }, []);

  return (
    <div>
        
    </div>
  )
}