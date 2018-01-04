import React from 'react';
import { connect } from 'react-redux';
import { fetchListing, deleteListing } from '../actions/listings';
import ListingCard from '../components/ListingCard';

class Listing extends React.Component {

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.id)
    }

    onClickDelete = listingID => {
        const { history, deleteListing } = this.props

        deleteListing(listingID, history);
    }

    render() {
        const { listing } = this.props;

        if (!listing.errors) {
            return (
                <div>
                    <ListingCard listing={ listing } deleteButton={ this.onClickDelete } />
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Listing Not Found</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        listing: state.listing
    })
}

export default connect(mapStateToProps, { fetchListing, deleteListing })(Listing);
