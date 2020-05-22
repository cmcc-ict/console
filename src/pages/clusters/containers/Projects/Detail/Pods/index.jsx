/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { observer, inject } from 'mobx-react'
import PodsCard from 'components/Cards/Pods'

@inject('detailStore')
@observer
export default class Pods extends React.Component {
  store = this.props.detailStore

  render() {
    const { cluster, namespace } = this.props
    return (
      <PodsCard
        detail={this.store.detail}
        limit={6}
        prefix={`/clusters/${cluster}/projects/${namespace}`}
      />
    )
  }
}
