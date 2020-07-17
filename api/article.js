import request from './request'

export function lists(page) {
    return request({
        method: 'GET',
        data: {page: page},
        url: '/api/v1/articles'
    })
}
export function categories() {
    return request({
        method: 'GET',
        url: '/api/v1/articles/categories'
    })
}
export function detail(id) {
    return request({
        method: 'GET',
        url: '/api/v1/articles/'+id
    })
}
export function sitemap(page) {
    return request({
        method: 'GET',
        data: {page: page},
        url: '/api/v1/articles/sitemap'
    })
}