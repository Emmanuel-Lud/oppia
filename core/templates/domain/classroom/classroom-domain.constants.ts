// Copyright 2018 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Constants for the classroom domain.
 */

export const ClassroomDomainConstants = {
  CLASSROOOM_DATA_URL_TEMPLATE:
    '/classroom_data_handler/<classroom_url_fragment>',
  TOPIC_VIEWER_URL_TEMPLATE: (
    '/learn/<classroom_url_fragment>/<topic_url_fragment>'),
  TOPIC_VIEWER_REVISION_URL_TEMPLATE: (
    '/learn/<classroom_url_fragment>/<topic_url_fragment>/revision'),
  TOPIC_VIEWER_STORY_URL_TEMPLATE: (
    '/learn/<classroom_url_fragment>/<topic_url_fragment>/story'),
  CLASSROOM_HANDLER_URL_TEMPLATE: '/classroom/<classroom_id>',
  CLASSROOM_ID_HANDLER_URL_TEMPLATE: '/classroom_id_handler',
  CLASSROOM_ADMIN_DATA_HANDLER_URL_TEMPLATE: '/classroom_admin_data_handler'
} as const;
