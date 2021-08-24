import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // state
    // lifecycle hooks

    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [

            ]
        //     data: [
        //     { title:"Bloomsburg University", category: "school", slug: "bloomsburg-university" }, 
        //     { title: "Dollar Tree", category: "eCommerce", slug: "dollar-tree" }, 
        //     { title:"Amazon", category: "eCommerce", slug: "amazon" },
        //     { title:"Talen Energy", category: "nuclear", slug: "talen-energy" }
        // ]
        };


        // this.getPortfolioItems=this.getPortfolioItems.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePageTitleUpdate=this.handlePageTitleUpdate.bind(this)
    }


    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios.get('https://kfahrenbach.devcamp.space/portfolio/portfolio_items')
      .then(res => {
        if (filter) {
            this.setState({
                data: res.data.portfolio_items.filter(item => {
                    return item.category === filter;
                })
            });
        } else {
            this.setState({
                data: res.data.portfolio_items
            });
        }
      })
      .catch(error => {
        console.log(error);
      })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            // console.log("item data", item);
            return <PortfolioItem key={item.id} item={item}/>
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        });
    }

    render() {
    // this.getPortfolioItems();

        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
                /* <h2> {this.state.pageTitle}</h2> */
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                    <button className="btn" onClick={() => this.handleFilter('nuclear')}>nuclear</button>
                    <button className="btn" onClick={() => this.handleFilter('school')}>school</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>All</button>
                </div>
                <div className="portfolio-items-wrapper">                   
                    {this.portfolioItems()}
                </div>
            </div>
                
                
                /* <button onClick={this.handlePageTitleUpdate}>Change Title</button> */

        )
    }
}