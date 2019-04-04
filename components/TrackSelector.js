// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .category-row {
            line-height: 30px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-size: 12px;
            font-weight: bold;
            border-radius: 3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9.5px;
          }
        `}</style>
        <tbody>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(tracks[trackId].category)), background: categoryColorScale(tracks[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
          <tr>
            <td className="category-row" colSpan="7" style={{background: categoryColorScale(1)}}>
            Technical Competencies
            </td>
            <td className="category-row" colSpan="3" style={{background: categoryColorScale(2)}}>
            Responsibility/Complexity
            </td>
            <td className="category-row" colSpan="3" style={{background: categoryColorScale(3)}}>
            Leadership
            </td>
            <td className="category-row" colSpan="4" style={{background: categoryColorScale(4)}}>
            Area of Influence
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector
