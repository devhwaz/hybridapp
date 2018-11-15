"use strict";

import React, { Component } from "react";
import { StyleSheet, PanResponder, View, Text } from "react-native";

const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = "blue";
const CIRCLE_HIGHLIGHT_COLOR = "green";

class PanResponderExample extends Component {
  // 초기값을 지정한다.
  _panResponder = {};
  _previousLeft = 0;
  _previousTop = 0;
  _circleStyles = {};
  circle = null;

  constructor(props) {
    super(props);
    this.state = {
      numberActiveTouches: 0,
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0
    };
//  }

 // componentWillMount() {
    // 여섯가지 함수를 통해 터치 이벤트의 전체 라이프싸이클에 접근할 수 있다.
    // onStartShouldSetPanResponder는 터치 이벤트가 발생할 때 실행된다
    // onPanResponderGrant는 터치이벤트가 발생할 때 실행된다.
    // onPanResponderRelease, onPanResponderTerminate는 터치 이벤트가 끝날 때 실행된다.
    // onPanResponderMove 는 터치 이벤트가 진행중일 때 동작한다.
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: { left: this._previousLeft, top: this._previousTop }
    };
  }

  componentDidMount() {
    this._updatePosition();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          ref={circle => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}
        />
        <Text>
          {this.state.numberActiveTouches} touches,
          dx: {this.state.dx},
          dy: {this.state.dy},
          vx: {this.state.vx},
          vy: {this.state.vy}
        </Text>
      </View>
    );
  }

  // _PanResponder 메소드에서 호출할 때 _highlight와 _unHighlight가 시각적인 처리가 된다.
  _highlight = () => {
    this.circle &&
      this.circle.setNativeProps({
        style: { backgroundColor: CIRCLE_HIGHLIGHT_COLOR }
      });
  };

  _unHighlight = () => {
    this.circle &&
      this.circle.setNativeProps({ style: { backgroundColor: CIRCLE_COLOR } });
  };

  //원의 위치는 setNativeProps를 이용하여 직접 지정한다.
  _updatePosition = () => {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  };

  _handleStartShouldSetPanResponder = (event, gestureState) => {
    // 사용자의 원 부분을 누르기 시작할 때 이 responder를 활성화할까요?
    return true;
  };

  _handleMoveShouldSetPanResponder = (event, gestureState) => {
    // 사용자가 원 영역에서 터치한 생태로 이동할 때 이 reponder를 활성화할까요?
    return true;
  };

  _handlePanResponderGrant = (event, gestureState) => {
    this._highlight();
  };

  _handlePanResponderMove = (event, gestureState) => {
    // 이동한 값만큼 현재 위치를 계산한다.
    this.setState({
      stateID: gestureState.stateID,
      moveX: gestureState.moveX,
      moveY: gestureState.moveY,
      x0: gestureState.x0,
      y0: gestureState.y0,
      dx: gestureState.dx,
      dy: gestureState.dy,
      vx: gestureState.vx,
      vy: gestureState.vy,
      numberActiveTouches: gestureState.numberActiveTouches
    });

    // 이동한 값만큼 현재 위치를 계산한다.
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updatePosition();
  };

  _handlePanResponderEnd = (event, gestureState) => {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  };
}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: CIRCLE_COLOR,
    position: "absolute",
    left: 0,
    top: 0
  },
  container: { flex: 1, paddingTop: 64 }
});

export default PanResponderExample;
