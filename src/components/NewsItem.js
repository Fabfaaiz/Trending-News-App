import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { img, title, description, url, author, time, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute', right:'0'}}>
                    <span className=" badge rounded-pill bg-dark" style={{ left: '90%', zIndex: 1 }}>
                        {source}
                    </span>
                    </div>
                    <img src={img?img:'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg'} className="card-img-top" alt="alt" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><small className='text-muted'>By {author ? author : "Unknown"} on {time}</small></p>
                        <a href={url} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem