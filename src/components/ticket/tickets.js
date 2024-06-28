import React from "react";
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

/**
 * Displays all devleopment tickets in a project
 * @param {Array} tickets List of tickets 
 * @returns JSX
 */
const Tickets = ({ tickets = [] }) => {

    return (
    <>
        <div className="section">
            <input
            class="input is-primary"
            type="text"
            placeholder="Ticket Title or Number"
            />
        </div>
        <div className="section">
            {tickets.map((ticket) => {
                return <GitHubTicket key={ticket.id} ticket={ticket} />
            })}
        </div>
    </>
    )
}

Tickets.propTypes = {
    tickets: PropTypes.array.isRequired
};


const GitHubTicket = ({ ticket }) => {
    const {number, title, html_url, body, body_text, assignees, labels, tests} = ticket
    return (
    <div className="fixed-grid has-12-cols box">
        <div className="grid">
            <div className="cell is-row-span-2">
                {
                    assignees.map((assignee) => {
                        return <TicketAssignee assignee={assignee} key={assignee.id}/>
                    })
                }
            </div>
            <div className="cell is-col-span-8">
                <p ><a className="title is-5 button is-link is-light" href={`${html_url}`}>(#{number}) {title}</a></p>
            </div>
            <div className="cell is-col-span-2">
                {labels.map((label) => {
                    return <TicketLabel label={label} key={label.id} />
                }) }
            </div>
            <div className="cell">
                  <button class="button is-primary">Manage Tests</button>
            </div>
            <div className="cell is-col-span-10">
                {tests.map((test) => {
                    return <TicketCoveredByTest test={test} key={test.id} />
                }) }
            </div>

        </div>
    </div>)
}


Tickets.propTypes = {
    ticket: PropTypes.objectOf(PropTypes.shape({
        number: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
        body: PropTypes.string,
        body_text: PropTypes.string,
        labels: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        })).isRequired,
        assignees: PropTypes.arrayOf(
            PropTypes.shape({
                html_url: PropTypes.string.isRequired,
                avatar_url: PropTypes.string.isRequired,
                login: PropTypes.string.isRequired
            })
        ).isRequired,
        milestone: PropTypes.shape({
            html_url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    })).isRequired
  
}

const TicketCoveredByTest = ({test}) => {
    const {id, name, area, area_color} = test
    const { projectName } = useParams();

    return  (<a href={`/${projectName}/${area}/ticket/`} className="button is-small" style={{backgroundColor: `#${area_color}`}}>{name}</a>);
}

const TicketAssignee = ({assignee}) => {
    const {html_url, avatar_url, login} = assignee
    return (<a href={`${html_url}`}><img className="image is-48x48 is-rounded" alt={`${login}`} src={`${avatar_url}`} /></a>)
}



const TicketLabel = ({label}) => {
    const {name, color} = label
    return (<p className="tag mr-1" style={{backgroundColor: `#${color}`}}>{name}</p>)
}

export default Tickets