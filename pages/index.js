import React from 'react'
import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'
import Home from "./home"
import Article from "./article-template"
import { useRouter } from 'next/router'
import Head from "next/head";
import {NextSeo} from "next-seo";
import { NewsArticleJsonLd,LocalBusinessJsonLd } from 'next-seo';
export let config = { amp: false }

export default class extends React.Component {
    static async getInitialProps({ req, query }) {
        const amp = query.amp
        const url = req ? req.url : window.location.href
        const ampUrl = url
        return { amp, ampUrl }
    }
    render() {
        const {amp,ampUrl}=this.props
        switch(amp){

            case "article":
                config={amp:true}
                return(<Article/>)
                break;
            default:
                config={amp:false}
                return(<div><Home/></div>)
                break;
        }
    }
}