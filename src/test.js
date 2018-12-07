<table>
              <tr>
                <th><abbr title="Position">Names</abbr></th>
                <th>value</th>
              </tr>

              <tr>
                <th>IP-Address</th>
                <td Text style={{ fontWeight: 'bold' }}>{this.state.IPaddress} / {this.state.BM}</td>
              </tr>

              <tr>
                <th>Network</th>
                <td >{this.state.network}</td>
              </tr>

              <tr>
                <th>Prefix length</th>
                <td >{this.state.BM}</td>
              </tr>

              <tr>
                <th>Network range start</th>
                <td >{this.state.networkrangestart}</td>
              </tr>

              <tr>
                <th>Network range end</th>
                <td >{this.state.networkrangeend}</td>
              </tr>


              <tr>
                <th>total IP addresses</th>
                <td >{this.state.totalIPaddresses}</td>
              </tr>

              <tr>
                <th>IP-Address (Full)</th>
                <td >{this.state.ipfull}</td>
              </tr>
              <tr>
                <th>ip6.arpa Format</th>
                <td >{this.state.format}</td>
              </tr>

            </table>